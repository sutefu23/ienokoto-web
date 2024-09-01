import type {
  WP_REST_API_Post,
  WP_REST_API_Pages,
  WP_REST_API_Error,
  WP_REST_API_Settings,
  WP_REST_API_Attachment,
} from "wp-types";
import client from "~/api";
import type {
  StaffCustomField,
  ReformStoryCustomField,
  EventsCustomField,
} from "~/types/customFields";

export type Endpoints =
  | "news"
  | "events"
  | "staff"
  | "reform_story"
  | "column"
  | "top_copy"
  | "case";

export type FeaureImageDetail = {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
};
export type WP_REST_API_Attachment_Detail = WP_REST_API_Attachment & {
  media_details: {
    sizes: {
      thumbnail: FeaureImageDetail;
      medium: FeaureImageDetail;
      medium_large: FeaureImageDetail;
      large: FeaureImageDetail;
      past_case_thumbnail: FeaureImageDetail;
    };
  };
};

export type WPApiResult<T> = T | WP_REST_API_Error;

export type WP_REST_API_Post_With_FeatureImage = WP_REST_API_Post & {
  "wp:featuredmedia": WP_REST_API_Attachment_Detail[];
};

export type WP_REST_API_Staff = WP_REST_API_Post & { acf: StaffCustomField };

export type WP_REST_API_ReformStory = WP_REST_API_Post & {
  acf: ReformStoryCustomField;
};

export type WP_REST_API_Event = WP_REST_API_Post_With_FeatureImage & {
  acf: EventsCustomField;
};

const useWPApi = () => {
  const fetchPost = async <T = WP_REST_API_Post>(
    endpoint: Endpoints,
    id: number,
    _embed = true
  ) => {
    try {
      const res = await client.get<T>(`/wp-json/wp/v2/${endpoint}/${id}`, {
        params: { _embed, acf_format: "standard" },
      });
      const data = res.data;
      return data;
    } catch (e: unknown) {
      console.error(e);
    }
  };

  const fetchPosts = async <
    T extends unknown[] = WP_REST_API_Post_With_FeatureImage[]
  >(
    endpoint: Endpoints,
    options: Partial<WP_REST_API_Settings> = { posts_per_page: 10 },
    _embed = true
  ) => {
    try {
      const res = await client.get<T>(`/wp-json/wp/v2/${endpoint}`, {
        params: { ...options, _embed, acf_format: "standard" },
      });
      const data = res.data;
      if (data.length === 0) {
        throw new Error("No Data");
      }
      return data;
    } catch (e: unknown) {
      console.error(e);
    }
  };

  const fetchImage = async (mediaId: number = 0) => {
    try {
      const res = await client.get<WP_REST_API_Attachment_Detail>(
        `/wp-json/wp/v2/media/${mediaId}`
      );
      const data = res.data;
      return data;
    } catch (e: unknown) {
      console.error(e);
    }
  };

  const fetchPage = async (slug: string) => {
    try {
      const res = await client.get<WP_REST_API_Pages>(
        `/wp-json/wp/v2/pages/?slug=${slug}`
      );
      const data = res.data[0];
      return data;
    } catch (e: unknown) {
      console.error(e);
    }
  };

  return {
    fetchPost,
    fetchPosts,
    fetchImage,
    fetchPage,
  };
};

export default useWPApi;

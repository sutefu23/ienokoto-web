import type {
  WP_REST_API_Post,
  WP_REST_API_Error,
  WP_REST_API_Settings,
  WP_REST_API_Attachment,
} from "wp-types";
import client from "~/api";
import type {
  StaffCustomField,
  ReformStoryCustomField,
} from "~/types/customFields";

export type Endpoints = "news" | "events" | "staff" | "reform_story" | "column";

export type WPApiResult<T> = T | WP_REST_API_Error;

export type WP_REST_API_Post_With_FeatureImage = WP_REST_API_Post & {
  _embedded: { "wp:featuredmedia": WP_REST_API_Attachment[] };
};

export type WP_REST_API_Staff = WP_REST_API_Post & { acf: StaffCustomField };

export type WP_REST_API_ReformStory = WP_REST_API_Post & {
  acf: ReformStoryCustomField;
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

  const fetchPosts = async <T = WP_REST_API_Post_With_FeatureImage[]>(
    endpoint: Endpoints,
    options: Partial<WP_REST_API_Settings> = { posts_per_page: 10 },
    _embed = true
  ) => {
    try {
      const res = await client.get<T>(`/wp-json/wp/v2/${endpoint}`, {
        params: { ...options, _embed, acf_format: "standard" },
      });
      const data = res.data;
      return data;
    } catch (e: unknown) {
      console.error(e);
    }
  };

  const fetchImage = async (mediaId: number = 0) => {
    try {
      const res = await client.get<WP_REST_API_Attachment>(
        `/wp-json/wp/v2/media/${mediaId}`
      );
      const data = res.data;
      return data;
    } catch (e: unknown) {
      console.error(e);
    }
  };
  return {
    fetchPost,
    fetchPosts,
    fetchImage,
  };
};

export default useWPApi;

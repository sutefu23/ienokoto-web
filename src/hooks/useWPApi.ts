import type { WP_REST_API_Post, WP_REST_API_Error, WP_REST_API_Settings, WP_REST_API_Attachment } from "wp-types";
import client from '~/api'

export type Endpoints = 'news'|'events'|'staff'|'reform_story'|'column'

export type WPApiResult<T> = T | WP_REST_API_Error;

export type WP_REST_API_Post_Data = WP_REST_API_Post & { _embedded: { 'wp:featuredmedia': WP_REST_API_Attachment[] } }

const useWPApi = () => {
  const fetchPosts = async (endpoint: Endpoints, options: Partial<WP_REST_API_Settings> = {posts_per_page:10}) => {    
    try{
      const res = await client.get<WP_REST_API_Post_Data[]>(`/wp-json/wp/v2/${endpoint}`,{params:{...options, _embed: true}})
      const data = res.data
      return data
    }catch(e : unknown){
      console.error(e)
    }  
  }

  const fetchImage = async (mediaId: number) => {
    try{
      const res = await client.get<WP_REST_API_Attachment>(`/wp-json/wp/v2/media/${mediaId}`)
      const data = res.data
      return data
    }catch(e : unknown){
      console.error(e)
    }
  }
  return {
    fetchPosts,
    fetchImage
  }
}

export default useWPApi;
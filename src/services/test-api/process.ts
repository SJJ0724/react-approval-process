import { request } from '@umijs/max';

/** 获取所有成员 GET /api/process/get-all-member */
export async function getAllMember(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/process/get-all-member', {
    method: 'GET',
    ...(options || {}),
  });
}

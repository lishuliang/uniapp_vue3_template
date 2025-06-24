import request from '@/utils/request.js';

//查询首页新闻轮播
export function slideList(query) {
    return request({
        url: '/api/WSlideshow/list',
        method: 'get',
        params: query,
    });
}
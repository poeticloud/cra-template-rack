/*
 * @Author: your name
 * @Date: 2020-12-14 18:45:04
 * @LastEditTime: 2020-12-23 19:08:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /cra-template-rack/template/src/views/service.js
 */
import request from '../utils/request';

/**
 * auth相关接口
 */
export function getToken(data) {
  return request()('/auth/obtain-token', {
    skipAuthRefresh: true,
    method: 'POST',
    data,
  });
}
export function register(data) {
  return request()('/user/register', {
    skipAuthRefresh: true,
    method: 'POST',
    data,
  });
}
export function resetPassword(data) {
  return request()('/reset-password', {
    skipAuthRefresh: true,
    method: 'POST',
    data,
  });
}

/**
 * service相关接口
 */
export function getAllServices(params = {}) {
  return request()('/svc', {
    params,
  });
}

export function addService(params = {}) {
  return request()('/svc', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export function updateService(pathParams, params = {}) {
  const { serviceId } = pathParams;
  return request()(`/svc/${serviceId}`, {
    method: 'PUT',
    data: {
      ...params,
    },
  });
}

export function deleteService(pathParams, params = {}) {
  const { serviceId } = pathParams;
  return request()(`/svc/${serviceId}`, {
    method: 'DELETE',
    data: {
      ...params,
    },
  });
}

export function getMyInfo(params = {}) {
  return request()(`/me`, {
    data: {
      ...params,
    },
  });
}

export function updateMyInfo(params = {}) {
  return request()(`/me`, {
    method: 'PUT',
    data: {
      ...params,
    },
  });
}

export function sendEmail(data) {
  return request()('/resend-email/find-password', {
    skipAuthRefresh: true,
    method: 'POST',
    data,
  });
}
export function sendRegisterEmail(data) {
  return request()('/resend-email/register', {
    method: 'POST',
    data: {
      ...data,
    },
  });
}

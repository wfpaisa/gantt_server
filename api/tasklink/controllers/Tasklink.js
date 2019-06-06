'use strict';

/**
 * Tasklink.js controller
 *
 * @description: A set of functions called "actions" for managing `Tasklink`.
 */

module.exports = {

  /**
   * Retrieve tasklink records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.tasklink.search(ctx.query);
    } else {
      return strapi.services.tasklink.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a tasklink record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.tasklink.fetch(ctx.params);
  },

  /**
   * Count tasklink records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.tasklink.count(ctx.query, populate);
  },

  /**
   * Create a/an tasklink record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.tasklink.add(ctx.request.body);
  },

  /**
   * Update a/an tasklink record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.tasklink.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an tasklink record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.tasklink.remove(ctx.params);
  }
};

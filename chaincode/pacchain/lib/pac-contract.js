/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class PacContract extends Contract {

    async pacExists(ctx, pacId) {
        const buffer = await ctx.stub.getState(pacId);
        return (!!buffer && buffer.length > 0);
    }

    async createPac(ctx, pacId, value) {
        const exists = await this.pacExists(ctx, pacId);
        if (exists) {
            throw new Error(`The pac ${pacId} already exists`);
        }
        const asset = { value };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(pacId, buffer);
    }

    async readPac(ctx, pacId) {
        const exists = await this.pacExists(ctx, pacId);
        if (!exists) {
            throw new Error(`The pac ${pacId} does not exist`);
        }
        const buffer = await ctx.stub.getState(pacId);
        const asset = JSON.parse(buffer.toString());
        return asset;
    }

    async updatePac(ctx, pacId, newValue) {
        const exists = await this.pacExists(ctx, pacId);
        if (!exists) {
            throw new Error(`The pac ${pacId} does not exist`);
        }
        const asset = { value: newValue };
        const buffer = Buffer.from(JSON.stringify(asset));
        await ctx.stub.putState(pacId, buffer);
    }

    async deletePac(ctx, pacId) {
        const exists = await this.pacExists(ctx, pacId);
        if (!exists) {
            throw new Error(`The pac ${pacId} does not exist`);
        }
        await ctx.stub.deleteState(pacId);
    }

}

module.exports = PacContract;

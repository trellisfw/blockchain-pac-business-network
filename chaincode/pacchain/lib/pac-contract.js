/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

//importing PAC class
let PAC = requite('./PAC.js');

class PacContract extends Contract {

    /**
     * Init the ledger with two fixed PAC records (for demo purposes only)
     * @param {*} ctx 
     */
    async init(ctx) {
        console.log("instantiating the contract - init");

        let PACs = [];
        let pac1 = new PAC('01', '958b9f65d87caacd734e355871b99adc3ee0cb46b08704733ecc37f935b839cc', '01');
        let pac2 = new PAC('02', 'a8fd9a7c227155ec31baadeece2603ca601546563d8c11c3e241d820885cc850', '02');

        PACs.push(pac1);
        PACs.push(pac2);

        //add the PACs to the world state
        await ctx.stub.putState(pac1.pacId, Buffer.from(JSON.stringify(pac1)));
        await ctx.stub.putState(pac2.pacId, Buffer.from(JSON.stringify(pac2)));

        return PACs;
    }//init

    /**
     * Looks for the PAC. It returns true if found.
     * @param {*} ctx 
     * @param {*} pacId 
     */
    async pacExists(ctx, pacId) {
        const buffer = await ctx.stub.getState(pacId);
        return (!!buffer && buffer.length > 0);
    }

    /**
     * This method creates a PAC in the ledger
     * @param {*} ctx 
     * @param {*} pacId -> Unique identifier for the PAC (UUID)
     * @param {*} value -> quoteHash value
     */
    async createPac(ctx, pacId, value) {
        const exists = await this.pacExists(ctx, pacId);
        if (exists) {
            throw new Error(`The pac ${pacId} already exists`);
        }
        let pac = new PAC(pacID, value, 'otk1');
        const asset = { value };
        //const buffer = Buffer.from(JSON.stringify(asset));
        const buffer = Buffer.from(JSON.stringify(pac));
        await ctx.stub.putState(pacId, buffer);
    }//createPac

    /**
     * Reads the PAC content from the World State
     * @param {*} ctx 
     * @param {*} pacId 
     */
    async readPac(ctx, pacId) {
        const exists = await this.pacExists(ctx, pacId);
        if (!exists) {
            throw new Error(`The pac ${pacId} does not exist`);
        }
        const buffer = await ctx.stub.getState(pacId);
        const asset = JSON.parse(buffer.toString());
        return asset;
    }//readPac

    /**
     * Updating the PAC in the ledger
     * @param {*} ctx 
     * @param {*} pacId 
     * @param {*} newValue 
     */
    async updatePac(ctx, pacId, newValue) {
        const exists = await this.pacExists(ctx, pacId);
        if (!exists) {
            throw new Error(`The pac ${pacId} does not exist`);
        }
        const asset = { value: newValue };
        let pac = new PAC(pacId, newValue, 'otk1')
        //const buffer = Buffer.from(JSON.stringify(asset));
        const buffer = Buffer.from(JSON.stringify(pac));
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

/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { ChaincodeStub, ClientIdentity } = require('fabric-shim');
const { PacContract } = require('..');
const winston = require('winston');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.should();
chai.use(chaiAsPromised);
chai.use(sinonChai);

class TestContext {

    constructor() {
        this.stub = sinon.createStubInstance(ChaincodeStub);
        this.clientIdentity = sinon.createStubInstance(ClientIdentity);
        this.logging = {
            getLogger: sinon.stub().returns(sinon.createStubInstance(winston.createLogger().constructor)),
            setLevel: sinon.stub(),
        };
    }

}

describe('PacContract', () => {

    let contract;
    let ctx;

    beforeEach(() => {
        contract = new PacContract();
        ctx = new TestContext();
        ctx.stub.getState.withArgs('1001').resolves(Buffer.from('{"value":"pac 1001 value"}'));
        ctx.stub.getState.withArgs('1002').resolves(Buffer.from('{"value":"pac 1002 value"}'));
    });

    describe('#pacExists', () => {

        it('should return true for a pac', async () => {
            await contract.pacExists(ctx, '1001').should.eventually.be.true;
        });

        it('should return false for a pac that does not exist', async () => {
            await contract.pacExists(ctx, '1003').should.eventually.be.false;
        });

    });

    describe('#createPac', () => {

        it('should create a pac', async () => {
            await contract.createPac(ctx, '1003', 'pac 1003 value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1003', Buffer.from('{"value":"pac 1003 value"}'));
        });

        it('should throw an error for a pac that already exists', async () => {
            await contract.createPac(ctx, '1001', 'myvalue').should.be.rejectedWith(/The pac 1001 already exists/);
        });

    });

    describe('#readPac', () => {

        it('should return a pac', async () => {
            await contract.readPac(ctx, '1001').should.eventually.deep.equal({ value: 'pac 1001 value' });
        });

        it('should throw an error for a pac that does not exist', async () => {
            await contract.readPac(ctx, '1003').should.be.rejectedWith(/The pac 1003 does not exist/);
        });

    });

    describe('#updatePac', () => {

        it('should update a pac', async () => {
            await contract.updatePac(ctx, '1001', 'pac 1001 new value');
            ctx.stub.putState.should.have.been.calledOnceWithExactly('1001', Buffer.from('{"value":"pac 1001 new value"}'));
        });

        it('should throw an error for a pac that does not exist', async () => {
            await contract.updatePac(ctx, '1003', 'pac 1003 new value').should.be.rejectedWith(/The pac 1003 does not exist/);
        });

    });

    describe('#deletePac', () => {

        it('should delete a pac', async () => {
            await contract.deletePac(ctx, '1001');
            ctx.stub.deleteState.should.have.been.calledOnceWithExactly('1001');
        });

        it('should throw an error for a pac that does not exist', async () => {
            await contract.deletePac(ctx, '1003').should.be.rejectedWith(/The pac 1003 does not exist/);
        });

    });

});
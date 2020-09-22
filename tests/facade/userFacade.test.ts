import { expect } from "chai";
import { stubInterface } from "ts-sinon";
import {IUserFacade} from '../../src/facade/User/interface';

describe('bar', () => {
    it('sync function returns true', async () => {

        const iUserFacade = stubInterface<IUserFacade>();
        iUserFacade.findAll.returns(new Promise((r,q)=> {
            r([1,2,3])
        }));

        const users: any[] = await iUserFacade.findAll();
        expect(3).equal(users.length);
    });
});
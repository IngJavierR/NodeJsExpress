import { expect } from "chai";
import { stubInterface } from "ts-sinon";
import {IUserService} from '../../src/services/User/interface';

describe('bar', () => {
    it('sync function returns true', async () => {

        const iUserService = stubInterface<IUserService>();
        iUserService.findAll.returns(new Promise((r,q)=> {
            r([1,2,3])
        }));

        const users: any[] = await iUserService.findAll();
        expect(3).equal(users.length);
    });
});
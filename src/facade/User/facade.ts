import { IUserFacade } from "./interface";
import { ParametersError } from '../../config/error';
/**
 * @export
 * @implements {IUserModelService}
 */
const UserFacade: IUserFacade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async findAll(): Promise<any[]> {
        throw new ParametersError('Error desconocido');
        //return [1,2,3];
    }
}

export default UserFacade;
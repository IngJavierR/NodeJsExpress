import { UserService } from "../../services";
import { IUserFacade } from "./interface";


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

        let users = await UserService.findAll();
        return users;
        //throw new UnauthorizedError('Error desconocido');
        //return [1,2,3];
    }
}

export default UserFacade;
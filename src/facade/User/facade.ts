import { IUserFacade } from "./interface";
import User from "../../models/user.model";


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

        let users = await User.findAll();
        console.log('Users', users);
        return users;
        //throw new UnauthorizedError('Error desconocido');
        //return [1,2,3];
    }
}

export default UserFacade;
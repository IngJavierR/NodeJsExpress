import { IUserService } from "./interface";
import User from "../../models/user.model";


/**
 * @export
 * @implements {IUserModelService}
 */
const UserService: IUserService = {
    /**
     * @returns {Promise < any[] >}
     * @memberof UserFacade
     */
    async findAll(): Promise<any[]> {

        let users = await User.findAll();
        return users;
    }
}

export default UserService;
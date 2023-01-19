import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      const id = user_id.toString();
      const users = this.showUserProfileUseCase.execute({ user_id: id });
      return response.json(users);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { ShowUserProfileController };

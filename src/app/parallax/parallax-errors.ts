import { ClassContentError } from "../errors/class-content-error";
import { ParallaxMouseService } from "./parallax-mouse.service";

export class ParallaxDirectiveError extends ClassContentError {
  constructor(methodName: string, message: string) {
    super(ParallaxMouseService.name, methodName, message);
  }
}

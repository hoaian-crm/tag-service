import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MockTag } from "./mock.entity";
import { MockController } from "./mock.controller";

@Module({
    imports: [TypeOrmModule.forFeature([MockTag])],
    controllers: [MockController]
})
export class MockModule {
}
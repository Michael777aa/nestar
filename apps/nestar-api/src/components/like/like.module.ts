import { Module } from '@nestjs/common';
import LikeSchema from '../../schemas/Like.model';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { ViewModule } from '../view/view.module';
import { LikeService } from './like.service';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'Like', schema: LikeSchema }]), AuthModule, ViewModule],
	providers: [LikeService],
	exports: [LikeService],
})
export class LikeModule {}

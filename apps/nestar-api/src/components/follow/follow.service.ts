import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ViewService } from '../view/view.service';
import { Follower, Following } from '../../libs/dto/follow/follow';
import { InjectModel } from '@nestjs/mongoose';
import { MemberService } from '../member/member.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class FollowService {
	constructor(
		@InjectModel('Follow') private readonly followModel: Model<Follower | Following>,
		private memberService: MemberService,
		private authService: AuthService,
	) {}
}

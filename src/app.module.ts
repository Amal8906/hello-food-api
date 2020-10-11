import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { UserModule } from './user/user.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { FoodModule } from './food/food.module';

@Module({
  imports: [
    // MongooseModule.forRoot(process.env.MONGODB_URL,
    MongooseModule.forRoot('mongodb+srv://amal8906:8906504605@cluster0.xyp6z.mongodb.net/hello-food?retryWrites=true&w=majority',
    { useUnifiedTopology: true }),
    UserModule,
    MulterModule.register({ dest: __dirname + '/public/uploads' }),
    UserModule,
    
    MailerModule.forRootAsync({  useFactory: () => ({
      transport: 'smtps://amalmaitra33@gmail.com:123456780@smtp.gmail.com',
      defaults: { from: 'vvs.mobile20@gmail.com' },
      template: {
        dir: __dirname + '/templates',
        adapter: new HandlebarsAdapter(), // or new PugAdapter()
        options: { strict: true },
      },
    })  }),
    
    FoodModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

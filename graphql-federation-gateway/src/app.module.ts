import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        cors: true,
      },
      gateway: {
        serviceList: [
          { name: 'epasses', url: 'http://localhost:3001/graphql' },
          { name: 'citizens', url: 'http://localhost:3002/graphql' },
        ],
      },
    }),
  ],
})
export class AppModule {}
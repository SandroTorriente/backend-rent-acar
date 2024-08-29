import { Test, TestingModule } from '@nestjs/testing';
import { PaymentwayController } from './paymentway.controller';

describe('PaymentwayController', () => {
  let controller: PaymentwayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentwayController],
    }).compile();

    controller = module.get<PaymentwayController>(PaymentwayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

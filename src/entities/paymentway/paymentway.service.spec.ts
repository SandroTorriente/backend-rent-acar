import { Test, TestingModule } from '@nestjs/testing';
import { PaymentwayService } from './paymentway.service';

describe('PaymentwayService', () => {
  let service: PaymentwayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentwayService],
    }).compile();

    service = module.get<PaymentwayService>(PaymentwayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

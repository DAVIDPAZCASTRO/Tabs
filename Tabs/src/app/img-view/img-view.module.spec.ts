import { ImgViewModule } from './img-view.module';

describe('ImgViewModule', () => {
  let imgViewModule: ImgViewModule;

  beforeEach(() => {
    imgViewModule = new ImgViewModule();
  });

  it('should create an instance', () => {
    expect(imgViewModule).toBeTruthy();
  });
});

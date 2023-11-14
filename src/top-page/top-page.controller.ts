import { Controller, Get, Param } from '@nestjs/common';

@Controller('top-page')
export class TopPageController {
  @Get(':id')
  get(@Param('id') id: string) {}
}

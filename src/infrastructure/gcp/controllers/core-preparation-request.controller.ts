
import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';

@ApiTags('[core] gcp')
@Controller('_ah/warmup')
export class CorePreparationRequestController
{
    @Get()
    @ApiOperation({ summary: 'GCP app engine instance management' })
    @ApiCreatedResponse({ description: 'Request called by GCP to keep the instance alive.' })
    async main()
    {
        // request called by GCP to keep the instance alive
        return { status: true };
    }
}
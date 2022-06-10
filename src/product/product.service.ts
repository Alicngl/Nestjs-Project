import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductModel } from 'toolss/models/product.model';
import { ProductDto } from 'toolss/dtos/product.dto';
import { ResourceService } from 'libs/services/resource.service';

@Injectable()
export class ProductService extends ResourceService<
ProductModel,
ProductDto,
ProductDto
> {
    constructor(
        @InjectModel('Product')
        productMongo: Model<ProductModel>,
    ) {
        super(productMongo);
    }
}
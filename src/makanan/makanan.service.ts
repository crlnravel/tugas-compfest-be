import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class MakananService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createMakananDto: Prisma.MakananCreateInput) {
    return this.databaseService.makanan.create({ data: createMakananDto });
  }

  async findAll() {
    return this.databaseService.makanan.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.makanan.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateMakananDto: Prisma.MakananUpdateInput) {
    return this.databaseService.makanan.update({
      where: {
        id,
      },
      data: updateMakananDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.makanan.delete({
      where: {
        id,
      },
    });
  }
}

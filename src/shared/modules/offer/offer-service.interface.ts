import { CreateOfferDto } from './dto/create-offer.dto.js';
import { DocumentType } from '@typegoose/typegoose';
import { OfferEntity } from './offer.entity.js';
import { UpdateOfferDto } from './dto/update-offer.dto.js';
import { City } from '../../types/city.enum.js';
import { DocumentExists } from '../../types/index.js';

export interface OfferService extends DocumentExists {
  find(count?: number): Promise<DocumentType<OfferEntity>[]>;
  findAllFavorites(userId: string): Promise<string[]>;
  create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>>;
  findById(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  findWithAggregation(offerId: string, userId: string): Promise<DocumentType<OfferEntity> | null>;
  updateById(offerId: string, dto: UpdateOfferDto): Promise<DocumentType<OfferEntity> | null>;
  deleteById(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  findPremium(city: City): Promise<DocumentType<OfferEntity>[]>;
  findFavorites(userId: string): Promise<DocumentType<OfferEntity>[] | null>;
  changeFavoriteStatus(userId: string, offerId: string, status: number): Promise<DocumentType<OfferEntity> | null>;
  incCommentCount(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  calculateRating(offerId: string): Promise<DocumentType<OfferEntity> | null>;
  exists(documentId: string): Promise<boolean>;
}

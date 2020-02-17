export default class JinPost {
  postId: number;
  title: string;
  subTitle: string;
  publisher: string;
  publisherId: number;
  releaseTime: string;
  publisherIcon: string;
  like: boolean;
  bookMark: boolean;
  viewCount: number;
  likeCount: number;
  imageUrl: string;
  category: string;
  readTime: string;
  meta: string;
  tags: string;
  categoryId: number;
  itemId: number;
  ownerId: number;
  structureId: string;
  remoteStructure: string;
  structureAction: string;

  constructor(data: any) {
    this.postId = data['postId'];
    this.title = data['title'];
    this.subTitle = data['subTitle'];
    this.publisher = data['publisher'];
    this.publisherId = data['publisherId'];
    this.releaseTime = data['releaseTime'];
    this.publisherIcon = data['publisherIcon'];
    this.like = data['like'];
    this.bookMark = data['bookMark'];
    this.viewCount = data['viewCount'];
    this.likeCount = data['likeCount'];
    this.imageUrl = data['imageUrl'];
    this.category = data['category'];
    this.categoryId = data['categoryId'];
    this.readTime = data['readTime'];
    this.meta = data['meta'];
    this.tags = data['tags'];
    this.itemId = data['itemId'];
    this.ownerId = data['ownerId'];
    this.structureId = data['structureId'];
    this.remoteStructure = data['remoteStructure'];
    this.structureAction = data['structureAction'];
  }

  clone() {
    return new JinPost({
      ItemId: this.itemId,
      OwnerId: this.ownerId,
      StructureId: this.structureId,
      RemoteStructure: this.remoteStructure,
      StructureAction: this.structureAction,
      PostId: this.postId,
      Title: this.title,
      SubTitle: this.subTitle,
      Publisher: this.publisher,
      PublisherId: this.publisherId,
      ReleaseTime: this.releaseTime,
      PublisherIcon: this.publisherIcon,
      Like: this.like,
      BookMark: this.bookMark,
      ViewCount: this.viewCount,
      LiKeCount: this.likeCount,
      ImageUrl: this.imageUrl,
      CateGory: this.category,
      CategoryId: this.categoryId,
      ReadTime: this.readTime,
      Meta: this.meta,
      Tags: this.tags,
    });
  }
}

import { ArticleModel } from "../schemas/article";

class Article {
    // 입력 받은 수상 정보 생성
    static async create({ newArticle }) {
      const createdNewArticle = await ArticleModel.create(newArticle);
      return createdNewArticle;
    }
    
    // 수상이력의 고유한 id로 수상이력 검색(수정 할 때 사용)
    static async findById({ articleId }) {
      const article = await ArticleModel.findOne({ id: articleId });
      return article;
    }

    // 입력받은 userId의 모든 수상이력 검색
    static async findByUserId({ userId }) {
      const articles = await ArticleModel.find({ userId });
      return articles;
    }
    
    // 입력받은 값들로 수상이력 업데이트(수정)
    static async update({ articleId, fieldToUpdate, newValue }) {
      const filter = { id: articleId };
      const update = { [fieldToUpdate]: newValue };
      const option = { returnOriginal: false };
  
      const updatedArticle = await ArticleModel.findOneAndUpdate(
        filter,
        update,
        option
      );
      return updatedArticle;
    }
  
    static async deleteById({ articleId }) {
      const deleteResult = await ArticleModel.deleteOne({ id: articleId });
      const isDataDeleted = deleteResult.deletedCount === 1;
      return isDataDeleted;
    }
}
  
export { Article };


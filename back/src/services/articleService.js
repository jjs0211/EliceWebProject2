import { Article } from "../db";
// import { v4 as uuidv4 } from "uuid";

class ArticleService {
    /*
    static async addArticle({ userId, author, title, content }){
        const id = uuidv4();
        
        // id : article 고유 id
        // userId : user 고유 id
        // author : 게시글 작성자
        // title : 게시글 제목
        // content : 게시글 내용
        
        const newArticle = { id, userId, author, title, content };
        const createdNewArticle = await Article.create({ newArticle });

        return createdNewArticle
    }
    */

    static async getArticle({ articleId }) {
        // 해당 id를 가진 데이터가 db에 존재 여부 확인
        const article = await Article.findById({ articleId });
        if (!article){
            const errorMessage = "해당 id를 가진 게시글은 없습니다. 다시 한 번 확인해주세요.";
            return { errorMessage }
        }
        return article
      }
    
    static async getArticleList(){
        const articles = await Article.findAll();
        return articles;
    }
    


}
export { ArticleService }

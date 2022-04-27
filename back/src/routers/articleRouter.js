import is from "@sindresorhus/is";
import { Router } from "express";
import { ArticleService } from "../services/articleService";

const articleRouter = Router();

/*
articleRouter.post("/article/create", async function(req, res, next){
    try {
        if (is.emptyObject(req.body)) {
          throw new Error(
            "headers의 Content-Type을 application/json으로 설정해주세요"
          );
        }
    const {userId, author, title, content} = req.body;
    const newArticle = await ArticleService.addArticle({
        userId,
        author,
        title,
        content,
    });
    if (newArticle.errorMessage) {
        throw new Error(newArticle.errorMessage);
    }
      res.status(201).json(newArticle);
    } catch (error) {
      next(error);
    }
  });
  */

articleRouter.get("/article/:id", async function (req, res, next) {
try {
    // req (request) 에서 id 가져오기
    const articleId = req.params.id;

    // 위 id를 이용하여 db에서 데이터 찾기
    const article = await ArticleService.getArticle({ articleId });

    if (article.errorMessage) {
    throw new Error(article.errorMessage);
    }

    res.status(200).send(article);
} catch (error) {
    next(error);
}
});

articleRouter.get("/articlelist", async function (req, res, next){
  try {
    // 전체 게시글 목록을 얻음
    const article = await ArticleService.getArticleList();
    res.status(200).send(article);
  } catch (error) {
    next(error);
  }
});


  export { articleRouter }
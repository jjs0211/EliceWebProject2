import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const app = express();
const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "DA API",
      version: "1.0.0",
      description: "Elice 데이터분석 팀프로젝트: 팀18 우아한 남매들",
    },
    servers: [
      {
        url: "http://localhost:" + process.env.SERVER_PORT,
      },
    ],
  },
  apis: [],
};
const specs = swaggerJsDoc(options);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

// 기본 페이지
app.get("/", (req, res) => {
  res.send("안녕하세요, 레이서 프로젝트 API 입니다.");
});

export { app };

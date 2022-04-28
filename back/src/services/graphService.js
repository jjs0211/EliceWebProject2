import { User, Graph } from "../db";

class graphService {
    static async getGraph({ graphId }) {
        // 그래프 ID 로 조회
        const graph = await Graph.findById({ graphId });
        if (!graph) {
                const errorMessage =
                "해당 그래프를 찾을 수 없습니다. 다시 확인해주세요.";
                return { errorMessage };
            }
        return graph
    }
}

export { graphService };
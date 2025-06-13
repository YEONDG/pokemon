import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 dark:text-white">
      <h1>404 - 페이지를 찾을 수 없습니다</h1>
      <p>요청하신 페이지가 존재하지 않거나, 주소가 잘못되었습니다.</p>
      <Link
        to="/"
        className="border-2 border-blue-500 bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default NotFoundPage;

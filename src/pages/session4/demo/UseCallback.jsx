import { useState, useCallback } from "react";
import Content from "../../components/Content";

//2. useCallback() : tránh tạo ra hàm mới ko cần thiết trong function component
//- Reference types: trong khoá JS nâng cao với toán tử ===, sẽ so sánh dựa trên tham chiếu
//- useCallback mỗi lần tạo hàm mới, callback sẽ lưu hàm này vào bộ nhớ rồi trả ra tham chiếu mới dựa trên deps
//- nếu [] không có deps, callback luôn trả về tham chiếu cũ dẫn đến không re-render lại hàm logic trong đó
//- nếu có [deps] sau khi tính toán lại, callback sẽ trả về tham chiếu mới và re-render lại component
//- props truyền vào component con có thể là object, function, array

//- Note: nếu đã sử dụng React memo để tránh component con re-render không cần thiết
// thì bên component cha, những function phải sử dụng useCallback hết
// còn nếu không dùng React memo() cho component con thì ko cần xài useCallback
//- React memo()

const UseCallback = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div style={{ padding: "10px 32px" }}>
      {/* trong 1 component có thể nhận vào nhiều props, 
            props có thể là nguyên thuỷ , có thể là tham chiếu */}
      <Content onIncrease={handleIncrease} />
      <h1>UseCallback</h1>
      <h1>{count}</h1>
    </div>
  );
};
export default UseCallback;

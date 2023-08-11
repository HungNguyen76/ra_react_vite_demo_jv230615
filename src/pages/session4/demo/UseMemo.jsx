import { useState, useMemo, useRef } from "react";
// note: memo is HOC, useMemo: hooks -> cách dùng và xử lý khác nhau
// memo: tránh component re-render không cần thiết
// useMemo: tránh thực hiện 1 logic không cần thiết
// nếu để [] thì chỉ tính toán 1 lần duy nhất
// tất cả lần re-render sau đó chỉ trả về kết quả tính toán từ lần trước
// [deps] : mỗi lần re-render nếu deps thay đổi thì tính toán lại, còn deps ko thay đổi
// sẽ trả về kết quả trước đó
const UseMemo = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const nameRef = useRef();

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price, //giá trị từ input trả ra là string
        //-> parseInt(price) : doi string qua number
      },
    ]);
    setName(""); // sau khi add xong, tự clear input
    setPrice("");
    nameRef.current.focus(); //focus là method của DOM element
  };
  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      return result + prod.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div style={{ padding: "10px 32px" }}>
      <input
        ref={nameRef} //khi được mounted vào DOM, sẽ set lại current của ref
        value={name}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UseMemo;

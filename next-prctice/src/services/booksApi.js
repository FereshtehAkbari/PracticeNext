import api from "@/configs/api";

const getBooks = async () => {
  const res = await api.get("books?_limit=20");
  return res.data;
};

const getBookById = async (id) => {
  const res = await api.get(`books?_limit=20/${id}`);
  return res.data;
};
export { getBooks, getBookById };

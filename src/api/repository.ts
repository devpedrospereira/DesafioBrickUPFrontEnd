import { api } from "./axios";
import { useNavigate } from "react-router-dom";

export async function deleteScheduling(id: string) {
  await api.delete(`/schedulings/delete/${id}`);
}

export async function updateScheduling(id: string, data: FormData) {
  const headers = {
    "Content-Type": "application/json",
    id: `${id}`,
  };
  await api.post(`/schedulings`, data, {
    headers: headers,
  });
}

export async function createScheduling(data: FormData) {
  await api.post(`/schedulings`, data);
}

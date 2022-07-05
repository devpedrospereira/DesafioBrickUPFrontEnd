import { api } from "./axios";

async function deleteScheduling(id: string) {
  await api.delete(`/schedulings/${id}`);
}

// async function updateScheduling() {
//   await api.put(`/schedulings/${id}`);
// }

// async function createScheduling() {
//   await api.post(`/schedulings/${id}`);
// }

export { deleteScheduling };

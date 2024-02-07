const allProperties = new Map()
  .set(1, { id: 1, title: "First property" })
  .set(2, { id: 2, title: "Second property" })
  .set(3, { id: 3, title: "Third property" });
export const restHandlers = [
  // http.get("https://fake-api.com/properties", () => {
  //   return HttpResponse.json(Array.from(allProperties.values()));
  // }),
];

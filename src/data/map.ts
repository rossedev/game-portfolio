export const mapCanvas = async () => {
  return (await fetch("./map.json")).json();
};

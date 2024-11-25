"use strict";
// Promise
// 1-masala
// async function Test1(url: string): Promise<void> {
//   console.log(`Fetching  URL: ${url}`);
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       console.error("Error: Response not OK");
//       return;
//     }
//     const data = await response.json();
//     console.log(`Result:`, data);
//   } catch (error: any) {
//     console.error(`Error ${url}:`, error.message);
//   }
// }
// async function Test2(urls: string[]): Promise<void> {
//   for (const url of urls) {
//     await Test1(url); 
//   }
// }
// 2-masala
// const url1 = "https://jsonplaceholder.typicode.com/todos/1";
// const url2 = "https://jsonplaceholder.typicode.com/todos/1";
// async function getData(url: string): Promise<any> {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       console.error("Error:");
//       return null;
//     }
//     return await response.json();
//   } catch (error: any) {
//     console.error(`Error  ${url}:`, error.message);
//     return null;
//   }
// }
// async function fechData() {
//   const [users, posts] = await Promise.all([getData(url1), getData(url2)]);
//   console.log("Fetched data:");
//   console.log({ users, posts });
// }
// fechData();
// 3-masala
// const url1 = "https://jsonplaceholder.typicode.com/todos/1";
// const url2 = "https://jsonplaceholder.typicode.com/todos/1";
// async function fetchData(url: string): Promise<any> {
//   try {
//     const response = await fetch(url);
//     return response.ok ? await response.json() : null;
//   } catch {
//     return null;
//   }
// }
// async function getResponse() {
//   const result = await Promise.race([
//     fetchData(url1),
//     fetchData(url2),
//   ]);
//   console.log(result);
// }
// getResponse();
//4-masala
// const apiRes = [
//   "https://jsonplaceholder.typicode.com/posts/1",
//   "https://jsonplaceholder.typicode.com/posts/2",
//   "https://jsonplaceholder.typicode.com/posts/3",
// ];
// async function Data(endpoint: string) {
//   try {
//     const response = await fetch(endpoint);
//     if (!response.ok) {
//       throw new Error(
//         `Error:  fetch data (status: ${response.status})`
//       );
//     }
//     const result = await response.json();
//     console.log(`Data from ${endpoint}:`, result);
//   } catch (err: any) {
//     console.error(`Error  ${endpoint}:`, err.message);
//   }
// }
// async function Resault(endpoints: string[]) {
//   for (const endpoint of endpoints) {
//     await Data(endpoint);
//   }
// }
// Resault(apiRes);
// 5-masala
// const User = "https://jsonplaceholder.typicode.com/users";
// const Post = "https://jsonplaceholder.typicode.com/posts";
// async function getData(apiUrl: string) {
//   try {
//     const result = await fetch(apiUrl);
//     if (!result.ok) {
//       throw new Error(`Failed  fetch data ${apiUrl}`);
//     }
//     return await result.json();
//   } catch (err: any) {
//     console.error(`Error fetch ${apiUrl}:`, err.message);
//     throw err; 
//   }
// }
// async function loadAllData() {
//   try {
//     const [userList, postList] = await Promise.all([
//       getData(User),
//       getData(Post),
//     ]);
//     console.log("Retrieved data:", { users: userList, posts: postList });
//   } catch (error) {
//     console.error("Error:");
//   }
// }
// loadAllData();
// 6-masala
// interface Photo {
//   id: number;
//   title: string;
//   url: string;
// }
// interface Task {
//   id: number;
//   title: string;
//   completed: boolean;
// }
// interface Feedback {
//   id: number;
//   name: string;
//   body: string;
// }
// const apiPhotos = "https://jsonplaceholder.typicode.com/photos";
// const apiTodos = "https://jsonplaceholder.typicode.com/todos";
// const apiComments = "https://jsonplaceholder.typicode.com/comments";
// async function fetchResponse(apiUrl: string): Promise<any> {
//   try {
//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//       throw new Error(`Request failed: ${response.status}`);
//     }
//     return await response.json();
//   } catch (error: any) {
//     console.error(`Error  fetching  ${apiUrl}:`, error.message);
//     throw error;
//   }
// }
// async function getResponse() {
//   const apiList = [apiPhotos, apiTodos, apiComments];
//   for (const apiUrl of apiList) {
//     try {
//       const data = await fetchResponse(apiUrl);
//       console.log("Data successful request:", data);
//       return;
//     } catch (error) {
//       console.error("Error occurred:", error);
//     }
//   }
//   console.warn("All requests failed.");
// }
// getResponse();
// Generic
// 1-masala 
// function createWrap<T>(payload: T): { status: string; payload: T } {
//   return {
//     status: "success",
//     payload,
//   };
// }
// const stringResult = createWrap("Hello, TypeScript!");
// console.log(stringResult);
// const numberResult = createWrap(99);
// console.log(numberResult);
// const objectResult = createWrap({ firstName: "John", lastName: "Doe" });
// console.log(objectResult);
// 2-masala
// function Test<T>(list1: T[], list2: T[]): T[] {
//   return list1.filter((item) => list2.includes(item));
// }
// const firstNumbers = [1, 2, 3, 4];
// const secondNumbers = [3, 4, 5, 6];
// const sharedNumbers = Test(firstNumbers, secondNumbers);
// console.log("Common numbers:", sharedNumbers);
// const firstFruits = ["apple", "banana", "cherry"];
// const secondFruits = ["banana", "cherry", "date"];
// const sharedFruits = Test(firstFruits, secondFruits);
// console.log("Common strings:", sharedFruits);
// 3-masala 
// class Box<T> {
//   private elements: T[] = [];
//   add(element: T): void {
//     this.elements.push(element);
//   }
//   remove(element: T): void {
//     const index = this.elements.indexOf(element);
//     if (index !== -1) {
//       this.elements.splice(index, 1);
//     }
//   }
//   getAll(): T[] {
//     return [...this.elements];
//   }
// }
// const stringBox = new Box<string>();
// stringBox.add("apple");
// stringBox.add("banana");
// console.log(stringBox.getAll());
// stringBox.remove("apple");
// console.log(stringBox.getAll());
// const numberBox = new Box<number>();
// numberBox.add(10);
// numberBox.add(20);
// console.log(numberBox.getAll());
// numberBox.remove(15);
// console.log(numberBox.getAll()); 
//  yakunlandi

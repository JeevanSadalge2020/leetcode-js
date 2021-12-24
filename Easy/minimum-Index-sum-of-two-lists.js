function findRestaurant(list1, list2) {
  const obj = {};
  //   CREATE AN EMPTY OBJECT TO STORE THE DATA
  for (itemList1 of list1) {
    for (itemList2 of list2) {
      if (itemList1 === itemList2) {
        obj[itemList1] =
          Number(list1.indexOf(itemList1)) + list2.indexOf(itemList2);
      }
    }
  }
  //  NOW obj CONTAINS DATA OF COMMON HOTELS WITH THEIR SUMINDICES IN KEY VALUE FORMAT
  const values = Object.values(obj);
  //   HERE WE GRAB VALUES (INDICES) TO FIND WHICH IS THE LOWEST AMONG THEM
  const keys = Object.keys(obj);
  //   WE GROUP ALL THE KEYS HERE
  const min = Math.min(...values);
  // WE FIND MINIMUM OF VALUES --> SUM OF INDICES
  return keys.filter(key => obj[key] === min);
  //   HERE WE LOOP THROUGH ALL THE KEYS AND RETURN THOSE KEYS WHICH MATCHES THE MINIMUM SUM-INDIX VALUE
}

const arr1 = ["kuber", "mahalakshmi", "amrut"];
const arr2 = ["mahalakshmi", "garden", "rajasthani", "amrut"];
console.log(findRestaurant(arr1, arr2));

const arr3 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
const arr4 = ["KFC", "Burger King", "Tapioca Express", "Shogun"];
console.log(findRestaurant(arr3, arr4));

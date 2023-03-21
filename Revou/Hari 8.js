
    // JSON Object
    /* 
        "name": "berliana", 
        "age" : 25

*/
    const data = '{"name":"berliana" }'

    try {
        const user = JSON.parse(data);
        console.log("name:", user.name);
        console.log("age:", user.age);
    }
    //statement
 catch(err) {
    // erorr handling
    console.log{"error:", err.name}
    console.log{"error:", err.message}
}
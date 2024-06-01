const { User, Post } = require("./models");

async function createRecords() {
    const user = await User.create({
        display_name: "Goku",
        email: "goku@dragon.com",
        username: "goku",
        bio: "kamehameha!",
    });

    await Post.create({
        content: "Hello, World!",
        user_id: user.id,
        posted_at: new Date(),
    });
}

// createRecords();

async function fetchRecords() {
    const users = await User.findAll();
    console.log(JSON.stringify(users, null, 2));

    const posts = await Post.findAll();
    console.log(JSON.stringify(posts, null, 2));
}

// fetchRecords();

async function updateRecords() {
    await User.update(
        { bio: "Hello!" },
        {
            where: {
                id: 1,
            },
        }
    );
}

// updateRecords();

async function deleteRecords() {
    await User.destroy({
        where: {
            id: 2,
        },
    });
}

deleteRecords();

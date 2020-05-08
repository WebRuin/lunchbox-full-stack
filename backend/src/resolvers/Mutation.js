const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Mutations = {
  async createSandwich(parent, args, ctx, info) {
    // TODO: Check if they are logged in

    const sandwich = await ctx.db.mutation.createSandwich(
      { data: { ...args } },
      info
    );
    return sandwich;
  },
  updateSandwich(parent, args, ctx, info) {
    const updates = { ...args };
    delete updates.id;
    return ctx.db.mutation.updateSandwich(
      {
        data: updates,
        where: {
          id: args.id,
        },
      },
      info
    );
  },
  async deleteSandwich(parent, args, ctx, info) {
    const where = { id: args.id };
    // 1. find the sandwich
    const sandwich = await ctx.db.query.sandwich({ where }, `{ id title}`);
    // 2. Check if they own that sandwich, or have the permissions
    // TODO
    // 3. Delete it!
    return ctx.db.mutation.deleteSandwich({ where }, info);
  },
  async signup(parent, args, ctx, info) {
    args.email = args.email.toLowerCase();
    const password = await bcrypt.hash(args.password, 10);
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
          password,
          permissions: {
            set: ["USER"],
          },
        },
      },
      info
    );
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 000 * 60 * 60 * 24 * 365, // 1 year cookie
    });
    return user;
  },
};

module.exports = Mutations;

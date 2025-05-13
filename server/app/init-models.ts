import { Review } from "../entities/review/model/Review";
import { User } from "../entities/user/model/User";

export const initModels = () => {
  // Здесь настраиваем связи между моделями, если нужно

  User.hasMany(Review, { foreignKey: 'user_id' });
  Review.belongsTo(User, { foreignKey: 'user_id' });

  return {
    Review,
    User,
  };
};
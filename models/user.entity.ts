import { DataTypes, Model, Optional } from "sequelize";
import { DbConfig } from "../src/database/database-connection";
import { UUIDV4 } from "sequelize";


type UserAttributes = {
  id?: string,
  first_name: string,
  last_name: string,
  email_id: string,
  city: string;
  district: string;
  is_major: boolean;
  state: string;
  country: string;
  deleted_at?: Date
}

type UserCreationAttributes = Optional<UserAttributes, 'id'>;

export class User extends Model<UserCreationAttributes>{
  id?: string;
  first_name: string;
  last_name: string;
  email_id: string;
  city: string;
  district: string;
  is_major: boolean;
  state: string;
  country: string;
  deleted_at?: Date
}

User.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      defaultValue: UUIDV4,
      type: DataTypes.UUID,
    }, 
    first_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    last_name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email_id: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_major: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    deleted_at: {
      allowNull: true,
      type: DataTypes.DATE,
    }
  },
  {
    sequelize: DbConfig,
    modelName: 'User'
  }
)

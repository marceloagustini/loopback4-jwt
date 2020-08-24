// Copyright IBM Corp. 2020. All Rights Reserved.
// Node module: @loopback/example-todo-jwt
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
// update to Marcelo Agustini

import { Entity, model, property } from '@loopback/repository';
import { User } from '@loopback/authentication-jwt';

@model()
export class CustomUser extends User {

}

export interface CustomUserRelations {
  // describe navigational properties here
}

export type CustomUserWithRelations = CustomUser & CustomUserRelations;

import { Comment } from "./comment"

export interface Person {
    nom?: string
    prenom?: string
    commentaires?: Comment[]
}

import { Role } from '../../generated/prisma/client';

export interface AuthenticatedUser {
  userId: string;
  role: Role;
  branchId: string | null;
}
